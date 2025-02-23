import shutil
import os
import schedule
import time

# Definir rutas
origen = "C:/Users/Jcalderon/Desktop/Practicas/archivo.txt"
destino = "C:/Users/Jcalderon/Desktop/Destino/archivo.txt"

def mover_archivo():
    # Crear la carpeta de destino si no existe
    os.makedirs(os.path.dirname(destino), exist_ok=True)
    
    # Mover el archivo
    try:
        shutil.move(origen, destino)
        print("Archivo movido con éxito.")
    except FileNotFoundError:
        print("El archivo no existe en la ruta especificada.")
    except Exception as e:
        print(f"Error al mover el archivo: {e}")

# Programar la tarea para ejecutarse cada día a las 12:00 PM
schedule.every().day.at("12:00").do(mover_archivo)

print("Scheduler en ejecución...")
while True:
    schedule.run_pending()
    time.sleep(60)  # Esperar 60 segundos antes de la siguiente verificación

