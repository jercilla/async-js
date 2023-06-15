function obtenerPrimerNumero() {
  return 1
}

function obtenerSegundoNumero() {
  return 2
}

function obtenerSegundoNumeroTardandoMucho(seg = 1) {
  return new Promise((r) => setTimeout(() => r(prompt("Segundo número:")), seg * 1000));
}
