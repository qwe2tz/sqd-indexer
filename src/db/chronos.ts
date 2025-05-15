import { ethers } from "ethers";
import ChronosAbi from '../../abi/Chronos.json';

let provider: ethers.JsonRpcProvider = null;
let chronos: ethers.Contract = null;

export function initOrGetChronos() {
  if (!provider) {
    provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT);
  }

  if (!chronos) {
    chronos = new ethers.Contract(process.env.CHRONOS_CONTRACT_ADDRESS, ChronosAbi, provider);
  }

  return chronos;
}

export async function getChronosStartTime(): Promise<number> {
  const chronos = initOrGetChronos();
  const startTime = await chronos.startTime();
  return parseInt(startTime);
}

export async function getEpochLength(): Promise<number> {
  const chronos = initOrGetChronos();
  const epochLength = await chronos.epochLength();
  return parseInt(epochLength);
}

export async function getCurrentEpoch(): Promise<number> {
  const chronos = initOrGetChronos();
  const currentEpoch = await chronos.getCurrentEpoch();
  return currentEpoch;
}

export async function getTimestampForEpoch(epoch: number): Promise<number> {
  const chronos = initOrGetChronos();
  const timestamp = await chronos.timestampForEpoch(epoch);
  return Number(timestamp);
}

export async function getEpochAtTimestamp(timestamp: number): Promise<number> {
  const chronos = initOrGetChronos();
  const epoch = await chronos.epochAtTimestamp(timestamp);
  return epoch;
}
