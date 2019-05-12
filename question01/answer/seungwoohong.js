function yourCode(){res="",w=80,h=40,s=30;for(y=0;y<h;y++){for(var x=0;x<w;x++){dstnc=Math.sqrt(Math.pow(w/2-x,2)+Math.pow((h/2-y)*2,2));dstnc<s?res+='*':res+='-';}res += "\n";}return res;}
