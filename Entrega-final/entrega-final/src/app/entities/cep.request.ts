export class CepRequest {
  constructor(private cep: string) {
    this.cep = cep;
  }

  set Cep(cep: string) {
    this.cep = cep;
  }
}
