function create_cube_3x3x3_2D([u11,u12,u13,u21,u22,u23,u31,u32,u33],[b1,b2,b3],[l1,l2,l3],[r1,r2,r3],[f1,f2,f3])
{
	document.write('<div class="cube_3x3x3_2D"><div class="face arriere"><div class="face_arriere">');
		document.write('<div id="b1" class="sticker ' + b1 + '"></div>');
		document.write('<div id="b2" class="sticker ' + b2 + '"></div>');
		document.write('<div id="b3" class="sticker ' + b3 + '"></div></div></div>');
	document.write('<div class="face gauche"><div class="face_gauche">');
		document.write('<div id="l1" class="sticker ' + l1 + '"></div>');
		document.write('<div id="l2" class="sticker ' + l2 + '"></div>');
		document.write('<div id="l3" class="sticker ' + l3 + '"></div></div></div>');
	document.write('<div class="face droite"><div class="face_droite">');
		document.write('<div id="r1" class="sticker ' + r1 + '"></div>');
		document.write('<div id="r2" class="sticker ' + r2 + '"></div>');
		document.write('<div id="r3" class="sticker ' + r3 + '"></div></div></div>');
	document.write('<div class="face avant"><div class="face_avant">');
		document.write('<div id="f1" class="sticker ' + f1 + '"></div>');
		document.write('<div id="f2" class="sticker ' + f2 + '"></div>');
		document.write('<div id="f3" class="sticker ' + f3 + '"></div></div></div>');
	document.write('<div class="face haut">');
		document.write('<div id="u11" class="sticker ' + u11 + '"></div>');
		document.write('<div id="u12" class="sticker ' + u12 + '"></div>');
		document.write('<div id="u13" class="sticker ' + u13 + '"></div>');
		document.write('<div id="u21" class="sticker ' + u21 + '"></div>');
		document.write('<div id="u22" class="sticker ' + u22 + '"></div>');
		document.write('<div id="u23" class="sticker ' + u23 + '"></div>');
		document.write('<div id="u31" class="sticker ' + u31 + '"></div>');
		document.write('<div id="u32" class="sticker ' + u32 + '"></div>');
		document.write('<div id="u33" class="sticker ' + u33 + '"></div></div></div>');
}

function create_cube_2x2x2_3D([u11,u12,u21,u22],[f11,f12,f21,f22],[r11,r12,r21,r22])
{
	document.write('<div class="cube_2x2x2_3D"><div class="face haut">');
		document.write('<div class="sticker ' + u11 + '"></div>');
		document.write('<div class="sticker ' + u12 + '"></div>');
		document.write('<div class="sticker ' + u21 + '"></div>');
		document.write('<div class="sticker ' + u22 + '"></div></div>');
	document.write('<div class="face avant">');
		document.write('<div class="sticker ' + f11 + '"></div>');
		document.write('<div class="sticker ' + f12 + '"></div>');
		document.write('<div class="sticker ' + f21 + '"></div>');
		document.write('<div class="sticker ' + f22 + '"></div></div>');
	document.write('<div class="face droite">');
		document.write('<div class="sticker ' + r11 + '"></div>');
		document.write('<div class="sticker ' + r12 + '"></div>');
		document.write('<div class="sticker ' + r21 + '"></div>');
		document.write('<div class="sticker ' + r22 + '"></div></div></div>');
}

function create_cube_3x3x3_3D([u11,u12,u13,u21,u22,u23,u31,u32,u33],[f11,f12,f13,f21,f22,f23,f31,f32,f33],[r11,r12,r13,r21,r22,r23,r31,r32,r33])
{
	document.write('<div class="cube_3x3x3_3D"><div class="face haut">');
		document.write('<div class="sticker ' + u11 + '"></div>');
		document.write('<div class="sticker ' + u12 + '"></div>');
		document.write('<div class="sticker ' + u13 + '"></div>');
		document.write('<div class="sticker ' + u21 + '"></div>');
		document.write('<div class="sticker ' + u22 + '"></div>');
		document.write('<div class="sticker ' + u23 + '"></div>');
		document.write('<div class="sticker ' + u31 + '"></div>');
		document.write('<div class="sticker ' + u32 + '"></div>');
		document.write('<div class="sticker ' + u33 + '"></div></div>');
	document.write('<div class="face avant">');
		document.write('<div class="sticker ' + f11 + '"></div>');
		document.write('<div class="sticker ' + f12 + '"></div>');
		document.write('<div class="sticker ' + f13 + '"></div>');
		document.write('<div class="sticker ' + f21 + '"></div>');
		document.write('<div class="sticker ' + f22 + '"></div>');
		document.write('<div class="sticker ' + f23 + '"></div>');
		document.write('<div class="sticker ' + f31 + '"></div>');
		document.write('<div class="sticker ' + f32 + '"></div>');
		document.write('<div class="sticker ' + f33 + '"></div></div>');
	document.write('<div class="face droite">');
		document.write('<div class="sticker ' + r11 + '"></div>');
		document.write('<div class="sticker ' + r12 + '"></div>');
		document.write('<div class="sticker ' + r13 + '"></div>');
		document.write('<div class="sticker ' + r21 + '"></div>');
		document.write('<div class="sticker ' + r22 + '"></div>');
		document.write('<div class="sticker ' + r23 + '"></div>');
		document.write('<div class="sticker ' + r31 + '"></div>');
		document.write('<div class="sticker ' + r32 + '"></div>');
		document.write('<div class="sticker ' + r33 + '"></div></div></div>');
}

function create_cube_4x4x4_3D([u11,u12,u13,u14,u21,u22,u23,u24,u31,u32,u33,u34,u41,u42,u43,u44],[f11,f12,f13,f14,f21,f22,f23,f24,f31,f32,f33,f34,f41,f42,f43,f44],[r11,r12,r13,r14,r21,r22,r23,r24,r31,r32,r33,r34,r41,r42,r43,r44])
{
	document.write('<div class="cube_4x4x4_3D"><div class="face haut">');
		document.write('<div class="sticker ' + u11 + '"></div>');
		document.write('<div class="sticker ' + u12 + '"></div>');
		document.write('<div class="sticker ' + u13 + '"></div>');
		document.write('<div class="sticker ' + u14 + '"></div>');
		document.write('<div class="sticker ' + u21 + '"></div>');
		document.write('<div class="sticker ' + u22 + '"></div>');
		document.write('<div class="sticker ' + u23 + '"></div>');
		document.write('<div class="sticker ' + u24 + '"></div>');
		document.write('<div class="sticker ' + u31 + '"></div>');
		document.write('<div class="sticker ' + u32 + '"></div>');
		document.write('<div class="sticker ' + u33 + '"></div>');
		document.write('<div class="sticker ' + u34 + '"></div>');
		document.write('<div class="sticker ' + u41 + '"></div>');
		document.write('<div class="sticker ' + u42 + '"></div>');
		document.write('<div class="sticker ' + u43 + '"></div>');
		document.write('<div class="sticker ' + u44 + '"></div></div>');
	document.write('<div class="face avant">');
		document.write('<div class="sticker ' + f11 + '"></div>');
		document.write('<div class="sticker ' + f12 + '"></div>');
		document.write('<div class="sticker ' + f13 + '"></div>');
		document.write('<div class="sticker ' + f14 + '"></div>');
		document.write('<div class="sticker ' + f21 + '"></div>');
		document.write('<div class="sticker ' + f22 + '"></div>');
		document.write('<div class="sticker ' + f23 + '"></div>');
		document.write('<div class="sticker ' + f24 + '"></div>');
		document.write('<div class="sticker ' + f31 + '"></div>');
		document.write('<div class="sticker ' + f32 + '"></div>');
		document.write('<div class="sticker ' + f33 + '"></div>');
		document.write('<div class="sticker ' + f34 + '"></div>');
		document.write('<div class="sticker ' + f41 + '"></div>');
		document.write('<div class="sticker ' + f42 + '"></div>');
		document.write('<div class="sticker ' + f43 + '"></div>');
		document.write('<div class="sticker ' + f44 + '"></div></div>');
	document.write('<div class="face droite">');
		document.write('<div class="sticker ' + r11 + '"></div>');
		document.write('<div class="sticker ' + r12 + '"></div>');
		document.write('<div class="sticker ' + r13 + '"></div>');
		document.write('<div class="sticker ' + r14 + '"></div>');
		document.write('<div class="sticker ' + r21 + '"></div>');
		document.write('<div class="sticker ' + r22 + '"></div>');
		document.write('<div class="sticker ' + r23 + '"></div>');
		document.write('<div class="sticker ' + r24 + '"></div>');
		document.write('<div class="sticker ' + r31 + '"></div>');
		document.write('<div class="sticker ' + r32 + '"></div>');
		document.write('<div class="sticker ' + r33 + '"></div>');
		document.write('<div class="sticker ' + r34 + '"></div>');
		document.write('<div class="sticker ' + r41 + '"></div>');
		document.write('<div class="sticker ' + r42 + '"></div>');
		document.write('<div class="sticker ' + r43 + '"></div>');
		document.write('<div class="sticker ' + r44 + '"></div></div></div>');
}

function create_cube_5x5x5_3D([u11,u12,u13,u14,u15,u21,u22,u23,u24,u25,u31,u32,u33,u34,u35,u41,u42,u43,u44,u45,u51,u52,u53,u54,u55],[f11,f12,f13,f14,f15,f21,f22,f23,f24,f25,f31,f32,f33,f34,f35,f41,f42,f43,f44,f45,f51,f52,f53,f54,f55],[r11,r12,r13,r14,r15,r21,r22,r23,r24,r25,r31,r32,r33,r34,r35,r41,r42,r43,r44,r45,r51,r52,r53,r54,r55])
{
	document.write('<div class="cube_5x5x5_3D"><div class="face haut">');
		document.write('<div class="sticker ' + u11 + '"></div>');
		document.write('<div class="sticker ' + u12 + '"></div>');
		document.write('<div class="sticker ' + u13 + '"></div>');
		document.write('<div class="sticker ' + u14 + '"></div>');
		document.write('<div class="sticker ' + u15 + '"></div>');
		document.write('<div class="sticker ' + u21 + '"></div>');
		document.write('<div class="sticker ' + u22 + '"></div>');
		document.write('<div class="sticker ' + u23 + '"></div>');
		document.write('<div class="sticker ' + u24 + '"></div>');
		document.write('<div class="sticker ' + u25 + '"></div>');
		document.write('<div class="sticker ' + u31 + '"></div>');
		document.write('<div class="sticker ' + u32 + '"></div>');
		document.write('<div class="sticker ' + u33 + '"></div>');
		document.write('<div class="sticker ' + u34 + '"></div>');
		document.write('<div class="sticker ' + u35 + '"></div>');
		document.write('<div class="sticker ' + u41 + '"></div>');
		document.write('<div class="sticker ' + u42 + '"></div>');
		document.write('<div class="sticker ' + u43 + '"></div>');
		document.write('<div class="sticker ' + u44 + '"></div>');
		document.write('<div class="sticker ' + u45 + '"></div>');
		document.write('<div class="sticker ' + u51 + '"></div>');
		document.write('<div class="sticker ' + u52 + '"></div>');
		document.write('<div class="sticker ' + u53 + '"></div>');
		document.write('<div class="sticker ' + u54 + '"></div>');
		document.write('<div class="sticker ' + u55 + '"></div></div>');
	document.write('<div class="face avant">');
		document.write('<div class="sticker ' + f11 + '"></div>');
		document.write('<div class="sticker ' + f12 + '"></div>');
		document.write('<div class="sticker ' + f13 + '"></div>');
		document.write('<div class="sticker ' + f14 + '"></div>');
		document.write('<div class="sticker ' + f15 + '"></div>');
		document.write('<div class="sticker ' + f21 + '"></div>');
		document.write('<div class="sticker ' + f22 + '"></div>');
		document.write('<div class="sticker ' + f23 + '"></div>');
		document.write('<div class="sticker ' + f24 + '"></div>');
		document.write('<div class="sticker ' + f25 + '"></div>');
		document.write('<div class="sticker ' + f31 + '"></div>');
		document.write('<div class="sticker ' + f32 + '"></div>');
		document.write('<div class="sticker ' + f33 + '"></div>');
		document.write('<div class="sticker ' + f34 + '"></div>');
		document.write('<div class="sticker ' + f35 + '"></div>');
		document.write('<div class="sticker ' + f41 + '"></div>');
		document.write('<div class="sticker ' + f42 + '"></div>');
		document.write('<div class="sticker ' + f43 + '"></div>');
		document.write('<div class="sticker ' + f44 + '"></div>');
		document.write('<div class="sticker ' + f45 + '"></div>');
		document.write('<div class="sticker ' + f51 + '"></div>');
		document.write('<div class="sticker ' + f52 + '"></div>');
		document.write('<div class="sticker ' + f53 + '"></div>');
		document.write('<div class="sticker ' + f54 + '"></div>');
		document.write('<div class="sticker ' + f55 + '"></div></div>');
	document.write('<div class="face droite">');
		document.write('<div class="sticker ' + r11 + '"></div>');
		document.write('<div class="sticker ' + r12 + '"></div>');
		document.write('<div class="sticker ' + r13 + '"></div>');
		document.write('<div class="sticker ' + r14 + '"></div>');
		document.write('<div class="sticker ' + r15 + '"></div>');
		document.write('<div class="sticker ' + r21 + '"></div>');
		document.write('<div class="sticker ' + r22 + '"></div>');
		document.write('<div class="sticker ' + r23 + '"></div>');
		document.write('<div class="sticker ' + r24 + '"></div>');
		document.write('<div class="sticker ' + r25 + '"></div>');
		document.write('<div class="sticker ' + r31 + '"></div>');
		document.write('<div class="sticker ' + r32 + '"></div>');
		document.write('<div class="sticker ' + r33 + '"></div>');
		document.write('<div class="sticker ' + r34 + '"></div>');
		document.write('<div class="sticker ' + r35 + '"></div>');
		document.write('<div class="sticker ' + r41 + '"></div>');
		document.write('<div class="sticker ' + r42 + '"></div>');
		document.write('<div class="sticker ' + r43 + '"></div>');
		document.write('<div class="sticker ' + r44 + '"></div>');
		document.write('<div class="sticker ' + r45 + '"></div>');
		document.write('<div class="sticker ' + r51 + '"></div>');
		document.write('<div class="sticker ' + r52 + '"></div>');
		document.write('<div class="sticker ' + r53 + '"></div>');
		document.write('<div class="sticker ' + r54 + '"></div>');
		document.write('<div class="sticker ' + r55 + '"></div></div></div>');
}
