
# Social Media Clone

#### A site that looks like the mock-up social media 04.20.2020 :two_women_holding_hands: :couple:

#### By **Jiwon Han**

[![Project Status: WIP – Initial development is in progress, but there has not yet been a stable, usable release suitable for the public.](https://www.repostatus.org/badges/latest/wip.svg)](https://www.repostatus.org/#wip)
![LastCommit](https://img.shields.io/github/last-commit/jiwon-seattle/Social-media-clone)
![Languages](https://img.shields.io/github/languages/top/jiwon-seattle/Social-media-clone)
[![MIT license](https://img.shields.io/badge/License-MIT-orange.svg)](https://lbesson.mit-license.org/)


## 1. Social Media Clone

A social media webpage that consists of the functional components.

<image src="src/img/Diagram.png" width="550px" />

App is upper-most parent class, and it has four children TopNav, NewsFeed, Profile, PeopleYouMayKnow.

TopNav have TopNavButton and TopNavSearch as children components.

NewsFeed pass down the properties to Tweet. 

Recommended is a child component for PeopleYouMayKnow and they pass props to its child. 


### Sreenshot

<image src="src/img/screenshot.png" width="750px" />

## 2. Development
### Tech stack:
+ [NPM](https://www.npmjs.com/) for package management
+ [react](https://reactjs.org/) as core stack

### To run dev mode locally:
```bash
  $ git clone https://github.com/jiwon-seattle/Social-media-clone.git
  $ cd social-media-clone
  $ npm install  
  # After successfull pkg installtion
  $ npm start
```
Now, it will automatically open http://localhost:3000 and show you social media webpage.

## 3. Known Bugs

There are no known bug at this moment

## 4. Support and contact details

Any feedback is appreciated! Please contact at email: jiwon1.han@gmail.com

### License

*This software is licensed under the MIT license*

Copyright (c) 2020 **_Jiwon Han_**
