export class CepResponse {
  constructor(
    private cep: string,
    private logradouro: string,
    private complemento: string,
    private bairro: string,
    private localidade: string,
    private uf: string,
    private estado: string,
    private regiao: string,
    private ibge: string,
    private gia: string,
    private ddd: string,
    private siafi: string
  ) {
    this.cep = cep;
    this.logradouro = logradouro;
    this.complemento = complemento;
    this.bairro = bairro;
    this.localidade = localidade;
    this.uf = uf;
    this.estado = estado;
    this.regiao = regiao;
    this.ibge = ibge;
    this.gia = gia;
    this.ddd = ddd;
    this.siafi = siafi;
  }

  get Cep(): string {
    return this.cep;
  }
  set Cep(cep: string) {
    this.cep = cep;
  }

  get Logradouro(): string {
    return this.logradouro;
  }
  set Logradouro(logradouro: string) {
    this.logradouro = logradouro;
  }

  get Complemento(): string {
    return this.complemento;
  }
  set Complemento(complemento: string) {
    this.complemento = complemento;
  }

  get Bairro(): string {
    return this.bairro;
  }
  set Bairro(bairro: string) {
    this.bairro = bairro;
  }

  get Localidade(): string {
    return this.localidade;
  }
  set Localidade(localidade: string) {
    this.localidade = localidade;
  }

  get Uf(): string {
    return this.uf;
  }
  set Uf(uf: string) {
    this.uf = uf;
  }

  get Estado(): string {
    return this.estado;
  }
  set Estado(estado: string) {
    this.estado = estado;
  }

  get Regiao(): string {
    return this.regiao;
  }
  set Regiao(regiao: string) {
    this.regiao = regiao;
  }

  get Ibge(): string {
    return this.ibge;
  }
  set Ibge(ibge: string) {
    this.ibge = ibge;
  }

  get Gia(): string {
    return this.gia;
  }
  set Gia(gia: string) {
    this.gia = gia;
  }
}
