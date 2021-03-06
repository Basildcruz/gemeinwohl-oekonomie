## Economy for the Common Good
The [Economy for the Common Good (ECG)](http://gemeinwohl-oekonomie.org) is an alternative economic system built on values that promote the needs of the entire population.
 It is a tool for economic, political, and social change – a bridge to a better future.

## Project Goals
Open Source, modular, user-friendly, multi-language, mobile, beautiful:

* [Interactive ECG matrix](#interactive-ecg-matrix) (German: Interaktive GWÖ-Matrix).
* [ECG mobile app](https://github.com/sinnwerkstatt/economy-common-good-mobile#economy-for-the-common-good---mobile-app) (zur Zeit für Android, bald für iPhone).
* [ECG Quick Test](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/test.html#)
* [ECG Online Balancing web application](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie#ecg-balancing-web-application) (German: GWÖ Online Bilanzierung).

## Interactive ECG matrix

* :white_check_mark: [interactive online ECG Matrix 4.1 (open the demo)](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/#).
* :white_check_mark: [Video Interaktive GWÖ-Matrix ](http://www.youtube.com/watch?v=b3aGKeZJlBI)

### Roadmap

* :arrow_right: clarify whether it will be used officially by the ECG movement.
    * Yes, the desire is there, waiting for more info from the official ECG editorial team (06.01.2014).
    * clarify how this will be done and update this Roadmap.
* :white_check_mark: [create mobile application of the ECG matrix](https://github.com/sinnwerkstatt/economy-common-good-mobile) (done, needs approval)
* :arrow_right: add multi-language support.
    * :arrow_right: [English version](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues?milestone=3&state=open)

## ECG Balancing Web Application

* :white_check_mark: [ECG balancing web app (open initial prototype)](http://sinnwerkstatt.github.io/gemeinwohl-oekonomie/storage.html)
* :white_check_mark: [Video of GWÖ Online Bilanzierung WebApp - Frontend Prototype v0.1](http://www.youtube.com/watch?v=5SWigCkOKBk) (no sound)
* :white_check_mark: [initial draft of the online balancing process](http://creately.com/diagram/hlvynl1f1/MA9GKxHvxTVAKUOax04wCo1pbQc%3D) ([see Image](https://raw2.github.com/sinnwerkstatt/gemeinwohl-oekonomie/master/docs/images/ecg-online-balancing-process.png))

### Roadmap

* Read [the Roadmap here](docs/ECG_Online_Balancing_Roadmap_de.md#roadmap).

### Co-develop

* If your company wants to use the Online Balancing tool, you can [share with us your needs here](docs/ECG_Online_Balancing_Roadmap_de.md#mitgestalten) (currently only in German).


## Development Principles

* Freedom:
    * Everyone is free to do anything with the software. The license is MIT.
    * The user/organization/company decides whether and where to save entered data.
* Openness:
    * We share openly the strategic, organizational and technical development of the software.
    * All software is open source.
    * The data is not yet open source - it depends on the decision of the ECG movement.
    * This page contains the most important information and will be updated regularly.
    * See open and productive communication below.
* Modularity:
    * The frontend is separated from the backend, so that the user has the freedom to choose his backend technology.
    * Modular frontend: matrix structure and balances are saved as JSON file, matrix contents are saved in HTML files, a clean separation of : collections, routing, templates. 
    * Technically, it should be as easy as possible for the application to work offline (no Internet needed) and without a backend. Technically, it should be possible to export and import data only with the frontend. Implementation: use the HTML5 localStorage, [read](http://www.html5rocks.com/en/tutorials/file/dndfiles/) and [save matrix files](http://stackoverflow.com/a/20194533/2510374).
* Automation:
    * Automate as many manual tasks as possible.
    * Automation, software architecture and modularity enable us to change easily the matrix strucutre and data (in the JSON and HTML  files) and run scripts that automatically generate the whole ECG interactive matrix and mobile application.
* User-friendly:
    * enable shortest possible path from a desire to result.
    * simple, clean and beautiful.
    * fast.
* Real use:
    * The application should match the needs of ECG companies and people interested in ECG.
* Lean development
    * No bureaucracy, no barriers to participation, no waste of time.
    * focus on creating real value.
* Productive and Open Communication
    * focus on concrete, result-oriented and inspiring communication.
    * Open communication: preferred communication channel are the [GitHub issues](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues) - open for everyone to comment and resolve.
    * First open and then personal: when sharing information that is good to be visible by everyone, share it first openly and then send links to the people to whom it is personally relevant.
* Cooperation
    * Everyone who wants to contribute is welcome to do so. See [how to contribute](#contribute).
    * We document as much as possible so that it is easy even for people who we don't know to use and develop the software.

## Download

* Open the [GitHub repository](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie) and click on "Download ZIP" button on the right.
* Interactive ECG matrix: open the file ```dist/index.html```
* ECG Quick Test: open the file ```dist/test.html```
* ECG balancing web application: open the file ```dist/storage.html```

## Progress
See the [CHANGELOG](CHANGELOG.md).

## Browser Support
Tested on Firefox, Chrome, IE8+.

## Developers

* [Nikolay Georgiev](http://nikolay-georgiev.net), [sinnwerkstatt Medienagentur GmbH](https://www.sinnwerkstatt.com/), Berlin

## Financial Supporters
List of the financial supporters:

* [sinnwerkstatt](https://www.sinnwerkstatt.com/), Berlin, Germany

## Contribute
### Send a bug or propose new features
If you want to send a bug, or want a new feature for the online GWÖ-Matrix, please:

 * [Create a new issue here](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues/new) (you will need a GitHub account)
 * [Help with (comment on) the current issues](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues/).
 * You can write in English or German.

### Contribute to the source code
 * Fork, improve it and send a pull request (see [Video Tutorial](http://www.youtube.com/watch?v=SCZF6I-Rc4I&feature=c4-overview-vl&list=PLg7s6cbtAD15Das5LK9mXt_g59DLWxKUe)).

## Integration
 * Due to the modular architecture, the interactive matrix can be integrated easily in other projects

### Change the data
The indicators data is stored in HTML files. In order to change it, you:

* can change any indicator HTML contents in the files: https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/tree/master/app/scripts/data/matrix
* can change the indicator evaluation tables in the file: https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/blob/master/app/scripts/data/gwoe-indicators-data-base.js
* can change the structure of the matrix in the file: https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/blob/master/app/scripts/data/gwoe-matrix-data.js
* should run ```grunt build``` to update the JS templates (see [how to install Grunt](https://github.com/sinnwerkstatt/sinnwerkstatt-web/wiki/Grunt#install)). This will update the file ```app/scripts/data/gwoe-indicators-data.js``` with the new matrix data.

The changed data can be viewed from the ```dist/index.html``` file.

## Learn more

 * Visit the official [Gemeinwohl-Ökonomie website](http://www.gemeinwohl-oekonomie.de/).

## FAQ

Please read the [FAQ](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/blob/master/docs/FAQ.md) and if your question is missing or not well answered, please
* ask it in [a new GitHub issue](https://github.com/sinnwerkstatt/gemeinwohl-oekonomie/issues/new) (so that it is open to everyone)
* or send a personal email to Nikolay: ng@sinnwerkstatt.com

## License

* Source code is under the MIT License.
* All data belongs to the [Gemeinwohl-Ökonomie movement](http://gemeinwohl-oekonomie.de) (Hopefully to be open source too?)
