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
public class Jugador {

    private String nombreCompleto;
    private String apellidos;
    private String ci;
    private int edad;

    public Jugador(String nombreCompleto, String apellidos, String ci, int edad) {
        this.nombreCompleto = nombreCompleto;
        this.apellidos = apellidos;
        this.ci = ci;
        this.edad = edad;
    }
    
    public String getNombreCompleto(){
        return this.nombreCompleto;
    }
    
    public void setNombreCompleto(String nombre){
        this.nombreCompleto = nombre;
    }
    
    public void imprimir(){
        System.out.println(nombreCompleto);
        System.out.println(apellidos);
        System.out.println(ci);
        System.out.println(edad);
    }

    
}
