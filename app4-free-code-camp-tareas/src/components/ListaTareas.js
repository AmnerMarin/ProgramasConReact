import React, { useState } from "react";
import Formulario from "./Formulario";
import '../stylesheet/ListaTareas.css'
import Tarea from "./Tarea";

function ListaTareas() {

	const [tareas, setTareas] = useState([]); //Inciamos como un arreglo vacío

	const agregarTarea = tarea => {
		if(tarea.texto.trim()){
			tarea.texto = tarea.texto.trim();

			const tareasActualizadas  = [tarea,...tareas]
			//Esto para agregar al principio del arreglo a la tarea aunque se puede hace con unshift también
			setTareas(tareasActualizadas);
		}
	}

	const eliminarTarea=id=>{
		const tareasActualizadas = tareas.filter(tarea=>tarea.id!= id); 
		//Si el id es igual no se incluye al arreglo
		setTareas(tareasActualizadas);
	}

	const completarTarea=id=>{
		const tareasActualizadas = tareas.map(tarea =>{
			if(tarea.id === id){
				tarea.completada = !tarea.completada;
			}
			return tarea;
		})

		setTareas(tareasActualizadas)
	}

	return (
		<>
			<Formulario onSubmit={agregarTarea}/>
			<div className="tareas-lista-contenedor">
				{/* LISTA DE TAREAS */}
				{
					tareas.map(tarea =>
						<Tarea
							key={tarea.id}
							id = {tarea.id}
							texto={tarea.texto}
							completada={tarea.completada}
							eliminarTarea={eliminarTarea}
							completarTarea={completarTarea}
						/>
					)
				}
			</div>
		</>
	)
}

export default ListaTareas