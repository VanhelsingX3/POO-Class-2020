class Manual {
  dependencias: { [id: string]: string[] };

  constructor() {
    this.dependencias = {
      A: [],

      B: [],

      C: ["A", "B"],

      D: ["A", "C"]
    };
  }
}

export { Manual };
