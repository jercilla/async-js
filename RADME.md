# async-js

Mostrar el resultado de una suma en un div de una página al pulsar un botón

# 1 div resultado

```
<body>
  <div id="resultado">¿?</div>
</body>
```

# 2 botón sumar

```
<body>
  <div id="resultado">--</div>
  <button>Sumar dos números</button>
</body>
```

# 3 onclick

```
<body>
  <div id="resultado">--</div>
  <button onclick="document.getElementById('resultado').innerText = 1 + 2">Sumar dos números</button>
</body>
```


# 4 función suma

```
<script>
  function sumar() {
    document.getElementById('suma').innerText = 1 + 2
  }
</script>
<body>
  <div id="resultado">--</div>
  <button onclick="sumar()">Sumar dos números</button>
</body>
```

# 4 función suma

```
<script>
  function sumar() {
    const unNumero = 1
      const otroNumero = 2
      const resultado = unNumero + otroNumero
      // Ejemplo: 1 + 2 = 3
      const textoAMostrar = unNumero + ' + ' + otroNumero + ' = ' + resultado
      document.getElementById('suma').innerText = textoAMostrar
  }
</script>
<body>
  <div id="resultado">--</div>
  <button onclick="sumar()">Sumar dos números</button>
</body>
```

# 5 obtener números a sumar

```
<script>
  function sumar() {
    const unNumero = 1
      const otroNumero = 2
      const resultado = unNumero + otroNumero
      // Ejemplo: 1 + 2 = 3
      const textoAMostrar = unNumero + ' + ' + otroNumero + ' = ' + resultado
      document.getElementById('suma').innerText = textoAMostrar
  }
</script>
```


# 6 obtener números a sumar con retardo

```
<script>
  function sumar() {
  const unNumero = obtenerPrimerNumero()
  //const otroNumero = obtenerSegundoNumero()
  const otroNumero = obtenerSegundoNumeroTardandoMucho()
  const resultado = unNumero + otroNumero
  const textoAMostrar = unNumero + ' + ' + otroNumero + ' = ' + resultado
  document.getElementById('suma').innerText = textoAMostrar //1 + [object Promise] = 1[object Promise]
}
</script>
```

# 7 promise: then

```
<script>
  function sumar() {
    const unNumero = obtenerPrimerNumero()
    //const otroNumero = obtenerSegundoNumero()
    const promesaDeOtroNumero = obtenerSegundoNumeroTardandoMucho()
    promesaDeOtroNumero.then(
      function (otroNumero) {
        const resultado = unNumero + otroNumero
        const textoAMostrar = unNumero + ' + ' + otroNumero + ' = ' + resultado
        document.getElementById('suma').innerText = textoAMostrar
      }
    )
  }
</script>
```

# 7 promise await

```
<script>
  async function sumar() {
    const unNumero = obtenerPrimerNumero()
    const otroNumero = await obtenerSegundoNumero()
    const resultado = unNumero + otroNumero
    const textoAMostrar = unNumero + ' + ' + otroNumero + ' = ' + resultado
    document.getElementById('suma').innerText = textoAMostrar
  }
</script>
```

