FROM node:latest
#Core
RUN npm install -g javascripting 
RUN npm install -g learnyounode 
RUN npm install -g how-to-npm
RUN npm install -g scope-chains-closures
RUN npm install -g stream-adventure
RUN npm install -g elementary-electron
#RUN npm install -g how-to-markdown
RUN npm install -g learnyouhtml
#Electives
RUN npm install -g functional-javascript-workshop
#RUN npm install -g levelmeup
RUN npm install -g expressworks
RUN npm install -g makemehapi
RUN npm install -g promise-it-wont-hurt
RUN npm install -g async-you
#RUN npm install -g nodebot-workshop
#RUN npm install -g goingnative
RUN npm install -g planetproto
RUN npm install -g webgl-workshop
RUN npm install -g esnext-generation
RUN npm install -g count-to-6
#RUN npm install -g test-anything
RUN npm install -g tower-of-babel
RUN npm install -g learnyoumongo
RUN npm install -g regex-adventure
#RUN npm install -g learn-sass
RUN npm install -g pattern-lab-workshop
RUN npm install -g learnyoubash
RUN npm install -g currying-workshopper
RUN npm install -g bacon-love
#RUN npm install -g innersourceadventure
#RUN npm install -g shader-school
RUN npm install -g bytewiser
#RUN npm install -g bug-clinic
#RUN npm install -g browserify-adventure
#RUN npm install -g introtowebgl
#RUN npm install -g kick-off-koa
#RUN npm install -g lololodash
RUN npm install -g learnyoucouchdb
RUN npm install -g learn-generators
RUN npm install -g learnyoureact
#RUN npm install -g perfschool
#RUN npm install -g web-audio-school
RUN npm install -g torrential
RUN npm install -g thinking-in-react
#RUN npm install -g node-debug-school
RUN npm install -g seneca-in-practice
#RUN npm install -g less-is-more
RUN npm install -g js-best-practices
ENTRYPOINT ["/bin/bash"]
