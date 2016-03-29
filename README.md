#Opdrachten Week 3
######Minor Web Development - Performance Matters - Linda van Dijk
[Link naar server op Digital Ocean](https://looklive.lindavandijkdesign.nl/)

## Opdracht 1. Onderzoek naar taskmanagers

##### Taskmanagers

Ik ga Gulp gebruiken omdat

* Gulp geeft meer flexibiliteit dan Grunt
* Gulp is veel sneller met betrekking tot perfomance gerelateerde dingen dan Grunt
* Waar Grunt configuratie nodig heeft, kan Gulp meerdere taken tegelijk uitvoeren
* Net als Grunt gebruikt Gulp ook Node, maar je hoeft niet exact te weten hoe Node werkt. Het is erg simpel om Gulp te gebruiken

Bronnen

* [http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp](http://andy-carter.com/blog/a-beginners-guide-to-the-task-runner-gulp)
* [https://css-tricks.com/gulp-for-beginners/](https://css-tricks.com/gulp-for-beginners/)
* [https://cdnify.com/blog/top-10-gulp-tasks-for-optimising-front-end-performance/](https://cdnify.com/blog/top-10-gulp-tasks-for-optimising-front-end-performance/)

###Gestest op een 4G netwerk

## Opdracht 2. Optimaliseer HTTP requests

Met behulp van Gulp heb ik de JavaScript minified

Voor:

![js](readmeImg/js1.png)

Na: 

![js](readmeImg/js2.png)


Met behulp van Gulp heb ik ook de CSS minified

Voor:

![js](readmeImg/css1.png)

Na: 

![js](readmeImg/css2.png)

## Opdracht 3. Optimaliseer content images

Met behulp van Gulp heb ik de images 5% geoptimaliseerd

Voor:

![js](readmeImg/img1.png)

Na: 

![js](readmeImg/img2.png)

##Opdracht 4. Optimaliseer web fonts

Met Fontsquirrel heb ik het font gedownload zonder onnodige glyphs

Voor:

![js](readmeImg/font1.png)

Na: 

![js](readmeImg/font3.png)

## Conclusie taskmanagers

Zoals te zien is heeft het wel degelijk zin om scripts minified te maken en images en web fonts te optimaliseren. In dit project is het verschil minimaal, maar bij een groter project zal het verschil ook groter zijn. 

# Eind conclusie samenvatting

```
Optimize [Gestest op Snele internet verbinding]

Semantic & efficient HTML                                - 22ms
Optimized css                                            - 47ms
jQuery replaced by Javascript Vanilla                    - 104ms
Optimize CSS animation with the will-change property     - 33ms

```
[Onderzoekresultaten](https://github.com/linda2912/looklive-server/tree/student/linda)

```
Service Worker [Getest op 4G]

Without Service Worker load time: 12s
Service Worker implemented load time: 16s
With Service Worker load time: 2.63s

Totaal													- 9.37s
```
[Onderzoekresultaten](https://github.com/linda2912/looklive-server/tree/serviceWorker/linda)

```
Gulp [Gestest op 4G]

Optimaliseer HTTP requests								- 30ms
Optimaliseer content images								- 23ms
Optimaliseer web fonts									- 599ms
```
[Onderzoeksresultaten hierboven](https://github.com/linda2912/looklive-server/tree/gulp/linda)

#####Meaningful rendering
Before:
![](readmeImg/screenshot1)
After:
![](readmeImg/screenshot2)

### Advies
Mijn advies naar Looklive toe is 
* optimaliseer zoveel mogelijk met Gulp (of een andere taskmanager). Het is te veel werk voor weinig resultaat om het met de hand te doen, maar als het automatisch gaat dan is het zeker zinvol als je met grote grote projecten bezig bent.
* Zorg voor een first meaningful render door middel van critical CSS zodat de gebruiker zo snel mogelijk iets op de pagina ziet.
* Maak gebruik van paging zodat niet alle afbeeldingen tegelijk ingeladen worden.

