export default function image(name: string) {
  return require(`../assets/img/${name}`).default;
}
