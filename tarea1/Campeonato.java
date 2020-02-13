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
public class Campeonato {

    public String getNombreCampeonato() {
        return nombreCampeonato;
    }

    public void setNombreCampeonato(String nombreCampeonato) {
        this.nombreCampeonato = nombreCampeonato;
    }

    public Equipo[] getEquipos() {
        return equipos;
    }

    public void setEquipos(Equipo[] equipos) {
        this.equipos = equipos;
    }

    private String nombreCampeonato;
    private Equipo[] equipos;

    public Campeonato(String nombreCampeonato, Equipo[] equipos) {
        this.nombreCampeonato = nombreCampeonato;
        this.equipos = equipos;
    }
    
     
    public void Imprimir(){
        System.out.println(this.nombreCampeonato);
        
        for(int i=0; i< this.equipos.length; i++){
            this.equipos[i].Imprimir();
        }
    }

}
