import { Paciente, Ala } from "./types";

export const pacientes: Paciente[] = [
  {
    nome: "Alan Turing",
    setor: "Clínico Geral",
  },
  {
    nome: "Ada Lovelace",
    setor: "Ortopedista",
  },
  {
    nome: "Grace Hopper",
    setor: "Cardiologista",
  },
  {
    nome: "Linus Torvalds",
    setor: "Clínico Geral",
  },
  {
    nome: "Margaret Hamilton",
    setor: "Clínico Geral",
  },
  {
    nome: "Tim Berners-Lee",
    setor: "Cardiologista",
  },
];

export const alas: Ala[] = [
  { nome: "Clínico Geral", fila: [] },
  { nome: "Ortopedista", fila: [] },
  { nome: "Cardiologista", fila: [] },
];

export function triagem(paciente: Paciente) {
  const prioridades = ["Emergência", "Urgente", "Preferencial", "Comum"];
  const prioridade =
    prioridades[Math.floor(Math.random() * prioridades.length)];
  paciente.prioridade = <Paciente["prioridade"]>prioridade;

  const setor = alas.find((ala) => ala.nome === paciente.setor);
  if (setor) {
    setor.fila.push(paciente);
    setor.fila.sort(
      (a, b) =>
        prioridades.indexOf(a.prioridade!) - prioridades.indexOf(b.prioridade!)
    );
  } else {
    console.log("Setor inválido:", paciente.setor);
  }

  return paciente;
}

pacientes.forEach((paciente) => {
  triagem(paciente);
});
