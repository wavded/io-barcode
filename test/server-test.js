import JsBarcode from '../'
import { join } from 'path'
import fs from 'fs'

fs.writeFile(join(__dirname, 'server-test.html'), `

<!doctype html>
<html lang="en-us">
  <head>
    <meta charset="utf-8" />
    <title>JsBarcode - Server Render</title>
  </head>
  <body>
    <a href="/">Client Render Test</a>

    <h1>Encodings</h1>

    <h2>UPC</h2>
    <img src="${JsBarcode.UPC('123456789999', { displayValue: true })}" />

    <h2>EAN</h2>
    <img src="${JsBarcode.EAN('1234567890128', { displayValue: true })}" />

    <h2>ITF</h2>
    <img src="${JsBarcode.ITF('123456', { displayValue: true })}" />

    <h2>ITF14</h2>
    <img src="${JsBarcode.ITF14('10012345000017', { displayValue: true })}" />

    <h2>CODE39</h2>
    <img src="${JsBarcode.CODE39('JSBARCODE', { displayValue: true })}" />

    <h2>CODE128B</h2>
    <img src="${JsBarcode.CODE128B('JsBarcode', { displayValue: true })}" />

    <h2>CODE128C</h2>
    <img src="${JsBarcode.CODE128C('JcB', { displayValue: true })}" />

    <h2>Pharmacode</h2>
    <img src="${JsBarcode.Pharmacode(1234, { displayValue: true })}" />

    <h1>Options</h1>
    <img src="
      ${JsBarcode.Pharmacode(1234, {
        displayValue: true,
        backgroundColor: 'lightblue',
        lineColor: 'blue',
        textAlign: 'right',
        font: 'Arial',
        fontSize: 14,
        quite: 50,
        height: 50,
        width: 10
      })}
    " />

  </body>
</html>

`)