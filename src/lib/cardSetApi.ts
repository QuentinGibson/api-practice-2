import tcgdex from "@/lib/TCGdex";

export default async function cardSetApi(setCode: string) {
  const set = await tcgdex.fetch('sets', setCode);
  return set;
}
