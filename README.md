# React 84 – useEffect Cleanup 🔄

## 🎯 Cilj
Razumeti, da se cleanup funkcija:
- sproži pred naslednjim effectom
- sproži ob unmountu

## 🧠 Kaj se zgodi
Ob vsaki spremembi `name`:
1. React najprej pokliče cleanup
2. Nato požene nov effect

To prepreči več aktivnih timerjev hkrati.

https://codesandbox.io/p/sandbox/8jhn7p?file=%2Fsrc%2FApp.js%3A1%2C1-35%2C1
