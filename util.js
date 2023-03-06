function obtenerPrimerNumero() {
  return 1
}

function obtenerSegundoNumero() {
  return 2
}

function obtenerSegundoNumeroTardandoMucho(seg = 5) {
  return new Promise((r) => setTimeout(r(3), seg * 1000));
}
