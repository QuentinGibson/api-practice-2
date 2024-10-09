import TCGdex from '@/lib/TCGdex'

export default async function singleCardApi(cardId: string): ReturnType<typeof TCGdex.fetchCard> {
  const card = await TCGdex.fetchCard(cardId)

  return card
}

