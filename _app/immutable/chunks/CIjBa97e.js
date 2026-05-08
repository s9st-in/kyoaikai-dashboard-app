function s(t,r){return t.startsWith("rgba(")?t.replace(/,\s*[\d.]+\)$/,`, ${r})`):t.startsWith("rgb(")?`rgba(${t.slice(4,-1).trim()}, ${r})`:t}export{s as a};
