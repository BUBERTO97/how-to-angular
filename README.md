# HowToAngular

This project was generated with [Angular CLI](https://github.com/angular/angular-cli) version 13.3.6.

## Development server

Run `ng serve` for a dev server. Navigate to `http://localhost:4200/`. The application will automatically reload if you change any of the source files.

## Code scaffolding

Run `ng generate component component-name` to generate a new component. You can also use `ng generate directive|pipe|service|class|guard|interface|enum|module`.

## Build

Run `ng build` to build the project. The build artifacts will be stored in the `dist/` directory.

## Running unit tests

Run `ng test` to execute the unit tests via [Karma](https://karma-runner.github.io).

## Running end-to-end tests

Run `ng e2e` to execute the end-to-end tests via a platform of your choice. To use this command, you need to first add a package that implements end-to-end testing capabilities.

## Further help

To get more help on the Angular CLI use `ng help` or go check out the [Angular CLI Overview and Command Reference](https://angular.io/cli) page.

---

# <a name="observable"></a> OBSERVABLE REQUEST

Angular lavora molto bene con gli Observable (Oggetti in continuo mutamento). Gli Observable possono prendere il posto dei gestori di eventi (Event Handlers), infatti poichè un observable fornisce più valori duarante la sua esecuzione può essere usato dove andrestia costruire operatori su array (find, filter, sort...).

## Observable VS Promise

Le maggiori differenze tra Observable e Promise sono le seguenti:

1. Un **Observable** è dichiarativo; la computazione (esecuzione del/dei suo/i metodo/i) non inizia finchè non ci si sottoscrive a differenza della Promise che invece fa partire l' esecuzione al momento della dichiarazione.
```javascript
    //creazione del observable
    const observable = new Observable<number>(observer => {
    // funzione del subscriber
    });
    
    // inizio del esecuzione
    observable.subscribe(value => {
    // evento scaturito al cambiamento del observable
        console.log(value); //al cambiamento di value vedremo stampare in console il nuovo valore aggiornato
    });
```

```javascript
    // dichiarazione ed inizio esecuzione
    let promise = new Promise<number>(resolve => {
      //funzione/i di esecuzione
    });

    //gestione del ritorno della funzione
    promise.then(value => {
        //gestione del ritorno del esecuzione della funzione di promise
    }).catch(err => {
        //gestione dei possibili errori generati durante l' esecuzione
    }).finally(() => {
        //codice eseguito SEMPRE dopo then() o catch()
    });
```

**ATTENZIONE:** A differenza delle *Promise* gli *Observable* rimangono in "ascolto" di eventuali cambiamenti e questo implica un utilizzo maggiore delle risorse e quindi è consigliabile che dopo un *.subscrive()* (qualora on ci serva più gestire il cambiamento della risorsa richiesta) venga fatto un *.unsubscribe()* cosi da lasciare la possibilità a V8 di svuoare la memoria heap del browser.

2. Un **Observable** permette l' uso delle trasformazioni del dato **.pipe()**

