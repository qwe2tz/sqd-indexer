import { AbiEvent } from "@subsquid/evm-abi";
import * as abiModel from "./abi";

import path from "path";

export type EventType = {
  name: string;
  contract: string;
  abi: AbiEvent<any>;
  ORMModel: ObjectConstructor | null;
};

function toModelFileName(str: string) {
  return str
    .replace(/(?:^\w|[A-Z]|\b\w|\s+|_|\-)/g, (match, index) =>
      index === 0 ? match.toLowerCase() : match.toUpperCase()
    )
    .replace(/\s+/g, "")
    .replace("ERC", "Erc")
    .replace("uRI", "uri");
}

async function loadModelForEvent(eventName: string) {
  const model = toModelFileName(eventName);
  let importName = path.join(__dirname, `./model/generated/${model}.model.js`);

  try {
    const model = await import(importName);
    const modelClass = Object.values(model)[0];
    return modelClass as ObjectConstructor;
  } catch (error) {
    console.error(`Error loading model for event ${eventName}:`, error);
    return null;
  }
}

async function createEventRegistry(
  contractName: string,
  abiEvents: Object
): Promise<Record<string, EventType>> {
  console.log("Creating event registry for contract:", contractName);
  const entries: [string, EventType][] = await Promise.all(
    Object.entries(abiEvents).map(async ([eventName, eventDef]) => [
      eventDef.topic,
      {
        name: eventName,
        contract: contractName,
        abi: eventDef,
        ORMModel: await loadModelForEvent(`${eventName}`),
      },
    ])
  );
  return Object.fromEntries(entries);
}

export async function initEventRegistry() {
  const eventRegistry = {};
  for (const model in abiModel) {
    const contract = abiModel[model];
    Object.assign(eventRegistry, await createEventRegistry(model, contract.events));
  }

  return eventRegistry;
}