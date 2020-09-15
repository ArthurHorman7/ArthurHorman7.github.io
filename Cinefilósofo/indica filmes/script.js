function recomendar(){    
    var res = document.getElementById('res')
    var g = document.getElementsByName('gosta')
    var select = document.getElementById('sel');
   
    if(g[1].checked){
        res.innerText= `Você respondeu que não quer uma recomendação!`
        res.style.font='normal 20pt Arial'
        rei.innerHTML= ``
    }else if(g[0].checked){
        
        var modo = ''        
        var img = document.createElement('img')
        var item = document.createElement('option')
        img.setAttribute('id','foto')
        if(select.selectedIndex == 0){
            modo = 'Ação'
            img.setAttribute('src', 'logan.png')
            document.body.style.background = 'gray'
            rei.innerHTML = 'Logan'
        
        }else if(select.selectedIndex == 1){
            modo = 'Animação'
            img.setAttribute('src','tumulo.png')
            document.body.style.background = '#f3c032'
            rei.innerHTML = 'Túmulo dos vagalumes'
            
        
        }else if(select.selectedIndex == 2){
            modo = 'Aventura'
            img.setAttribute('src', 'contacomigo.png')
            document.body.style.background = '#55a853'
            rei.innerHTML = 'Conta comigo'

        }else if(select.selectedIndex == 3){
            //comédia
                modo ='Comédia'
                img.setAttribute('src', 'eueumesmoeirene.png')
                document.body.style.background = '#fab900'
                rei.innerHTML = 'Eu, eu mesmo e irene'
            
            }else if(select.selectedIndex == 4){
            //cult
            modo ='Cult'
                img.setAttribute('src', 'mrnobody.png')
                document.body.style.background = 'brown'
                rei.innerHTML = 'Mr. Nobody'
            
            }else if(select.selectedIndex == 5){
            //documentário
            modo ='Documentário'
                img.setAttribute('src', 'hitler.png')
                document.body.style.background = 'black'
                rei.innerHTML = 'Hitler-Uma carreira'
    
            }else if(select.selectedIndex == 6){
            //drama
            modo ='Drama'
                img.setAttribute('src', 'rock.png')
                document.body.style.background = 'gray'
                rei.innerHTML = 'Rock, um lutador'
            
            }else if(select.selectedIndex == 7){
            //gospel
            modo ='Gospel'
                img.setAttribute('src', 'fazendeiro.png')
                document.body.style.background = '#8d390c'
                rei.innerHTML = 'O fazendeiro e Deus'
            
            }else if(select.selectedIndex == 8){
            //histórico
            modo ='Histórico'
                img.setAttribute('src', 'pianista.png')
                document.body.style.background = '#28191c'
                rei.innerHTML = 'O pianista'
    
            }else if(select.selectedIndex == 9){
            //esporte
            modo ='esporte'
                img.setAttribute('src', 'titas.png')
                document.body.style.background = '#758795'
                rei.innerHTML = 'Duelo de titãs'
            
            }else if(select.selectedIndex == 10){
            //espionagem
            modo ='espionagem'
                img.setAttribute('src', 'impossivel.png')
                document.body.style.background = '#a7201d'
                rei.innerHTML = 'Missão Impossível'
            
            }else if(select.selectedIndex == 11){
            //fantasia
            modo ='fantasia'
                img.setAttribute('src', 'beowulf.png')
                document.body.style.background = '#2e404e'
                rei.innerHTML = 'A lenda de Beowulf'
            
            }else if(select.selectedIndex == 12){
            //faroeste
            modo ='Faroeste'
                img.setAttribute('src', 'django.png')
                document.body.style.background = 'red'
                rei.innerHTML = 'Django livre'
            
            }else if(select.selectedIndex == 13){
            //ficção científica
            modo ='Ficção científica'
                img.setAttribute('src', 'interestelar.png')
                document.body.style.background = '#020411'
                rei.innerHTML = 'Interestelar'
            
            }else if(select.selectedIndex == 14){
            //musical
            modo ='Musical'
                img.setAttribute('src', 'miseraveis.png')
                document.body.style.background = '#704b45'
                rei.innerHTML = 'Os miseráveis'
            
            }else if(select.selectedIndex == 15){
            //noir
            modo ='Noir'
                img.setAttribute('src', 'city.png')
                document.body.style.background = '#161618'
                rei.innerHTML = 'Sin City: A Cidade do Pecado'
            
            }else if(select.selectedIndex == 16){
            //Policial
            modo ='Policial'
                img.setAttribute('src', 'treinamento.png')
                document.body.style.background = '#63453e'
                rei.innerHTML = 'Dia de trinamento'
            
            }else if(select.selectedIndex == 17){
            //Pornográfico
            modo ='Pornográfico'
                img.setAttribute('src', 'xvideos.png')
                document.body.style.background = 'black'
                rei.innerHTML = 'Xvideos seu Safado(a)!'
            
            }else if(select.selectedIndex == 18){
            //romance
            modo ='Romance'
                img.setAttribute('src', 'fogo.png')
                document.body.style.background = '#e07d19'
                rei.innerHTML = 'À prova de fogo'
            
            }else if(select.selectedIndex == 19){
            //suspense
            modo ='Suspense'
                img.setAttribute('src', 'seven.png')
                document.body.style.background = '#1e2214'
                rei.innerHTML = 'Seven - Os setes crimes capitais'
            
            }else if(select.selectedIndex == 20){
            //terror
            modo ='Terror'
                img.setAttribute('src', 'babadook.png')
                document.body.style.background = 'black'
                rei.innerHTML = 'O Babadook'
            }
    }
        
    select.appendChild(item)
    res.innerHTML= `A recomedação para o tipo ${modo} de filme!`    
    res.style.textAlign= 'center'
    res.appendChild(img)
    res.style.font='normal 15pt Arial'

}