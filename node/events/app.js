const EventEmitter = require('events');

console.log(EventEmitter); // ---> mayuscula por que es una clase

const emisorProductos = new EventEmitter();

emisorProductos.on('compra', () =>{
    console.log('Se realizo una compra !');
});

emisorProductos.emit('compra');
emisorProductos.emit('compra');
emisorProductos.emit('compra');
emisorProductos.emit('compra');