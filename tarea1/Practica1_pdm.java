/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practica1_pdm;
import practica1_pdm.Jugador;
import practica1_pdm.Equipo;
import practica1_pdm.Campeonato;


/**
 *
 * @author JC
 */
public class Practica1_pdm {

    /**
     * @param args the command line arguments
     */
    public static void main(String[] args) {
        // TODO code application logic here
        Jugador jugado1 = new Jugador("Pepito1","Huiy Ter1","4555455 cbba", 20);
        Jugador jugado2 = new Jugador("Pepito2","Huiy Ter2","4555455 cbba", 22);
        Jugador jugado3 = new Jugador("Pepito3","Huiy Ter3","4555455 cbba", 25);
     
        
        Jugador[] jugadores = new Jugador[2];
        jugadores[0] = jugado1;
        jugadores[1] = jugado2;
        
        Equipo equipo1 = new Equipo("Equipo1","varones",jugadores);
        
        Equipo[] equipos = new Equipo[1];
        equipos[0] = equipo1;
        
        Campeonato campeonato = new Campeonato("Campeonato UNI", equipos);
        campeonato.Imprimir();
        
    }
    
}
