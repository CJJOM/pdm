/*
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
package practica1_pdm;

/**
 *
 * @author JC
 */
public class Equipo {
    
    private String nombreEquipo;
    private String categoria;
    private Jugador[] jugadores;


    public String getNombreEquipo() {
        return nombreEquipo;
    }

    public void setNombreEquipo(String nombreEquipo) {
        this.nombreEquipo = nombreEquipo;
    }

    public String getCategoria() {
        return categoria;
    }

    public void setCategoria(String categoria) {
        this.categoria = categoria;
    }

    public Jugador[] getJugadores() {
        return jugadores;
    }

    public void setJugadores(Jugador[] jugadores) {
        this.jugadores = jugadores;
    }
   
    public Equipo(String nombreEquipo, String categoria, Jugador[] jugadores) {
        this.nombreEquipo = nombreEquipo;
        this.categoria = categoria;
        this.jugadores = jugadores;
    }
    
    public void Imprimir(){
        System.out.println(this.nombreEquipo);
        System.out.println(this.categoria);
        
        for(int i=0; i< this.jugadores.length; i++){
            this.jugadores[i].imprimir();
        }
    }
  
    
}
