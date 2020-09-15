
//TODOS
function todos(){
    document.getElementById('camisas').style.display = 'flex';
    document.getElementById('casacos').style.display = 'flex';
    document.getElementById('mascaras').style.display = 'flex';

}


//CAMISAS
function camisas(){
    var cms = document.getElementById('camisas')
    var cas = document.getElementById('casacos')
    var mas = document.getElementById('mascaras')


    if(cms.style.display = 'none') {
        cms.style.display = 'flex';
        cas.style.display = 'none';
        mas.style.display = 'none';
    }else if(cas.style.display = 'flex'){
        cms.style.display = 'flex';
        cas.style.display = 'none';
        mas.style.display = 'none';
    }else if(mas.style.display = 'flex'){
        cms.style.display = 'flex';
        cas.style.display = 'none';
        mas.style.display = 'none';
    }

}


//CASACOS
function casacos(){

    var cms = document.getElementById('camisas')
    var cas = document.getElementById('casacos')
    var mas = document.getElementById('mascaras')


    if(cms.style.display = 'flex') {
        cms.style.display = 'none';
        cas.style.display = 'flex';
        mas.style.display = 'none';
    }else if(cas.style.display = 'none'){
        cms.style.display = 'none';
        cas.style.display = 'flex';
        mas.style.display = 'none';
    }else if(mas.style.display = 'flex'){
        cms.style.display = 'none';
        cas.style.display = 'flex';
        mas.style.display = 'none';
    }
}



//MASCARAS
function mascaras(){

    var cms = document.getElementById('camisas')
    var cas = document.getElementById('casacos')
    var mas = document.getElementById('mascaras')


    if(cms.style.display = 'flex') {
        cms.style.display = 'none';
        cas.style.display = 'none';
        mas.style.display = 'flex';
    }else if(cas.style.display = 'flex'){
        cms.style.display = 'none';
        cas.style.display = 'none';
        mas.style.display = 'flex';
    }else if(mas.style.display = 'none'){
        cms.style.display = 'none';
        cas.style.display = 'none';
        mas.style.display = 'flex';
    }
}





//MODALLLLLL

function compras(id){
    document.getElementById('bg-modal').style.top = '0%'
}

function fecharmodal() {
    document.getElementById('bg-modal').style.top = '-100%'
}
