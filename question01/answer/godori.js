function yourCode(){var v=[80,40,30];var r= "";var x=y=0;while(y<v[1]){for(x=0;x<v[0];x++){r+=(Math.sqrt(Math.pow(v[0]/2-x,2)+Math.pow((v[1]/2-y)*2,2))<v[2])?"*":"-"}r+="\n";y++}return r}
