import { AbiEvent } from "@subsquid/evm-abi";
import {
  Hub,
  IdentityStorage,
  RandomSamplingStorage,
  RandomSampling,
  StakingStorage,
  KnowledgeCollectionStorage,
  ProfileStorage,
  DelegatorsInfo,
  Paranet
} from './abi'

export type EventType = {
  name: string;
  contract: string;
  // TODO: Properly fix this any bullshit
  abi: AbiEvent<any>;
};

function createEventRegistry(contractName: string, abiEvents: Object): Record<string, EventType> {
  const entries: [string, EventType][] = Object.entries(abiEvents).map(([eventName, eventDef]) => [
    eventDef.topic,
    {
      name: eventName,
      contract: contractName,
      abi: eventDef,
    },
  ]);
  return Object.fromEntries(entries);
}

export const EventRegistry: Record<string, EventType> = {
  ...createEventRegistry("Hub", Hub.events),
  ...createEventRegistry("RandomSamplingStorage", RandomSamplingStorage.events),
  ...createEventRegistry("RandomSampling", RandomSampling.events),
  ...createEventRegistry("ProfileStorage", ProfileStorage.events),
  ...createEventRegistry("StakingStorage", StakingStorage.events),
  ...createEventRegistry("IdentityStorage", IdentityStorage.events),
  ...createEventRegistry("KnowledgeCollectionStorage", KnowledgeCollectionStorage.events),
  ...createEventRegistry("DelegatorsInfo", DelegatorsInfo.events),
  ...createEventRegistry("Paranet", Paranet.events),
};
