function cone(radius, height) {
  let slantHeigth = Math.sqrt(radius ** 2 + height ** 2);
  let area = radius ** 2 * Math.PI + Math.PI * radius * slantHeigth;
  let vol = (height * Math.PI * radius ** 2) / 3;

  console.log(`volume = ${vol.toFixed(4)}`);
  console.log(`area = ${area.toFixed(4)}`);
}
cone(3, 5);
