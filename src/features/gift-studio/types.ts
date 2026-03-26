export type QuizAnswers = {
  recipient: string
  productType: string
  occasion: string
  style: string
  interests: string[]
  budget: number
}

export type Product = {
  id: string
  name: string
  price: number
  images: string[]  // [0] = hero, [1..n] = thumbnails
  colors: string[]  // hex color swatches
  matchScore: number
}
