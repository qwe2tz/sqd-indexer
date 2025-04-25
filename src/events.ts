import { AbiEvent } from "@subsquid/evm-abi";
import * as abi from "./abi";

import path from "path";

export type EventType = {
  name: string;
  contract: string;
  abi: AbiEvent<any>;
  ORMModel: ObjectConstructor | null;
};

async function loadModelForEvent(eventName: string) {
  const model = String(eventName[0]).toLowerCase() + String(eventName).slice(1);
  const importName = path.join(__dirname, `./model/generated/${model}`).replace(/\.ts$/, ".js");;

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
        ORMModel: await loadModelForEvent(`${eventName}.model.ts`),
      },
    ])
  );
  return Object.fromEntries(entries);
}

export async function initEventRegistry() {
  const eventRegistry = {}
  for (const key in abi) {
    const contract = abi[key];
    Object.assign(eventRegistry, await createEventRegistry(key, contract.events));
  }

  return eventRegistry;
}