export function snackEmogi(name:string) {
  switch(name.toLowerCase()) {
    case 'burger':
      return '🍔'
    case 'pizza':
      return '🍕'
    case 'drink':
      return '🍹'
    case 'dessert':
      return '🍧'
    default:
      return '🙍‍♂️🔍'
  }
}
