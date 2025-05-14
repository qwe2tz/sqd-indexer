import { ethers } from "ethers";
import ChronosAbi from '../../abi/Chronos.json';

let provider: ethers.JsonRpcProvider = null;
let chronos: ethers.Contract = null;

export function initOrGetChronos() {
  if (!provider) {
    provider = new ethers.JsonRpcProvider(process.env.RPC_ENDPOINT);
  }

  if (!chronos) {
    chronos = new ethers.Contract(process.env.CHRONOS_CONTRACT, ChronosAbi, provider);
  }

  return chronos;
}

export async function getCurrentEpoch(): Promise<number> {
  const chronos = initOrGetChronos();
  const currentEpoch = await chronos.getCurrentEpoch();
  return currentEpoch;
}

export async function getStartTime(): Promise<number> {
  const chronos = initOrGetChronos();
  const startTime = await chronos.startTime();
  return startTime;
}

export async function getEpochProgress(): Promise<number> {
  const chronos = initOrGetChronos();
  const timeUntilNextEpoch = await chronos.timeUntilNextEpoch();
  const epochLength = await chronos.epochLength();

  // Percentage of epoch completed
  return 1 - parseInt(timeUntilNextEpoch) / parseInt(epochLength);
}

