import { scanAnalyzeServers } from "Other/AnalyzeServers.js";

/** @param {NS} ns */
export async function main(ns) {
    await scanAnalyzeServers(ns)
}
