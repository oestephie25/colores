function ejecutar(c_fondo){
	c_fondo=document.f_colores.c_fondo.value;
	c_texto=document.f_colores.c_texto.value;
	document.f_colores.res.style.background=c_fondo;
	document.f_colores.res.style.color=c_texto;
	if (c_fondo==1){
		r=document.f_colores.res.style.background="#16cac2";
	}
	if (c_fondo==2){
		r=document.f_colores.res.style.background="#800b42";
	}
	if (c_fondo==3){
		r=document.f_colores.res.style.background="#e1a722";
	}
	if (c_fondo==4){
		r=document.f_colores.res.style.background="#ff84c7";
	}
	if (c_texto==1){
		r=document.f_colores.res.style.color="white";
	}
	if (c_texto==2){
		r=document.f_colores.res.style.color="black";
	}
	if (c_texto==3){
		r=document.f_colores.res.style.color="gray";
	}
	if (c_texto==4){
		r=document.f_colores.res.style.color="#e7c87a";
	}
}