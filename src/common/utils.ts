import { clamp } from "lodash-es";

export function mapNumber(
  current: number,
  inMin: number, inMax: number,
  outMin: number, outMax: number
) {
  const mapped: number = ((current - inMin) * (outMax - outMin)) / (inMax - inMin) + outMin;


  return clamp(
    mapped,
    Math.min(outMin, outMax),
    Math.max(outMin, outMax),
  );
}

export function hslToHex(h: number, s: number, l: number) {
  l /= 100;
  const a = s * Math.min(l, 1 - l) / 100;
  const f = (n: number) => {
    const k = (n + h / 30) % 12;
    const color = l - a * Math.max(Math.min(k - 3, 9 - k, 1), -1);
    return Math.round(255 * color).toString(16).padStart(2, '0');   // convert to Hex and prefix "0" if needed
  };
  return `${f(0)}${f(8)}${f(4)}`;
}

/** 計算向量長度 */
export function getVectorLength(
  { x, y, z = 0 }: { x: number; y: number; z?: number }
) {
  return Math.sqrt(x * x + y * y + z * z);
}

/** 將向量轉換成單位向量 */
export function getUnitVector(
  { x, y, z = 0 }: { x: number; y: number; z?: number }
) {
  const magnitude = getVectorLength({ x, y, z });

  return {
    x: x / magnitude,
    y: y / magnitude,
    z: z / magnitude,
  };
}

export async function runTasks(tasks: (() => Promise<any>)[]) {
  for (const task of tasks) {
    await task();
  }
}