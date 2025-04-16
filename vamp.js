const vampImages = [
	'https://i.imgur.com/meT1G7T.jpg',
	'https://i.imgur.com/scpspdR.jpg',
	'https://i.imgur.com/097JazL.jpg',
	'https://i.imgur.com/8CzMjuC.jpg',
	'https://i.imgur.com/wSDz4VJ.jpg',
	'https://i.imgur.com/B8tOwat.jpg',
	'https://i.imgur.com/TVmRwJ4.jpg',
	'https://i.imgur.com/CM1nPI8.jpg',
	'https://i.imgur.com/xhcfSst.jpg',
	'https://i.imgur.com/rangHmZ.jpg',
	'https://i.imgur.com/edVhcjS.jpg',
	'https://i.imgur.com/WdPhUqm.jpg',
	'https://i.imgur.com/n1BBZlf.jpg',
	'https://i.imgur.com/xIEoPac.jpg',
	'https://i.imgur.com/yy3DwnX.gif',
	'https://i.imgur.com/hd0BUJm.jpg',
	'https://i.imgur.com/HE4dSil.jpg',
	'https://i.imgur.com/A3JJUut.jpg',
	'https://i.imgur.com/i4XKBvD.jpg',
	'https://i.imgur.com/XveMAVe.jpg',
	'https://i.imgur.com/epuUjge.jpg',
	'https://i.imgur.com/IT1VLti.jpg',
	'https://i.imgur.com/l412AZq.jpg',
	'https://i.imgur.com/sPdWGaK.jpg',
	'https://i.imgur.com/PQ3bg1q.jpg',
	'https://i.imgur.com/DeQ0qo3.jpg',
	'https://i.imgur.com/wFi3HXs.jpg',
	'https://i.imgur.com/PCm1v57.jpg',
	'https://i.imgur.com/Oxs2AHZ.jpg',
	'https://i.imgur.com/SKKwYtQ.jpg',
	'https://i.imgur.com/rfSvENU.jpg',
	'https://i.imgur.com/qguMH00.jpg',
	'https://i.imgur.com/4Jh46kV.jpg'
];

setInterval(()=>{

	const imgs = Array.from(document.querySelectorAll("img"));
	imgs.filter(img=>{
		const src = img.getAttribute("src");
		return !vampImages.includes(src);
	}).forEach(img=>{
		const imgsrc = vampImages[Math.floor(Math.random() * vampImages.length)];
		img.setAttribute("src", imgsrc);
	})

}, 10000000);
