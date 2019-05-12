function r(){var mp=Math.pow,ms=Math.sqrt,r="",w=80,h=40,sz=30;for(var y=0;y<h;y++){for(var x=0;x<w;x++){r+=ms(mp(w/2-x, 2)+mp((h/2-y)*2,2))<sz?"*":"-";}r+="\n"}return r;}
