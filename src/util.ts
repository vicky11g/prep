class Util {
  driver() {
    console.log(this.convertStringToNestedObject('a.b.c.d.e'));
  }
  convertStringToNestedObject(input: string) {
    return input.split('.').reduceRight((res, cur,i) => {
      return { [cur]: res };
    },{});
  }
}
const util = new Util();
util.driver();
