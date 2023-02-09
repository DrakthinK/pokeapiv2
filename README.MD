# POKEAPIV2

Proyecto Unidad  silabuz del día 06 de Febrero.


## INSTALACION BACKEND
1. **Instalar Python**
   1. Instalar PIP
      1. Descargar get-pip.py
         1. curl https://bootstrap.pypa.io/get-pip.py -o get-pip.py
      2. Ejecutar get-pip.py
          1. python get-pip.py
2. **Instalar virtualenv**
   1. pip install virtualenv

3. **Crear un ambiente virtual**
    *virtualenv venv --python=python3.10*
   1. Activar ambiente
      1. *source venv/bin/activate*
   2. En Windows
      1.venv/Scripts/activate.ps1
4. ****Instalar dependencias****
    1. pip install -r requirements.txt
5. **Realizar migraciones**
6. **Configurar settings para el uso de la base de datos, en settings.py modificar lo siguiente de acuerdo a lo necesario:**
```py 
DATABASES = {
    "default": {
        "ENGINE": "django.db.backends.YOUR_DB_ENGINE",
        "NAME": "DB_NAME",
        "USER": "DB_USER",
        "PASSWORD": "DB_PASSWORD",
        "HOST": "DB_HOST",
        "PORT": "DB_PORT"
    }
}
```
Lo anterior se encuentra en la configuración de DATABASES.
#### 5.1.1. Crear la base de datos
Crear la base de datos antes de poder realizar las migraciones.  
**5.2. Revisar si no existen migraciones no registradas**
>cd backend
> 
> Python manage.py makemigrations
 #### 5.3. **Migrar base de datos**
> Python manage.py migrate
___
6. **Empezar la aplicación**
> Python manage.py runserver

## INSTALACION FRONTEND
## Autores ✒️

* **Piero Brayan Pezo Marin** - *Trabajo Inicial* - [DrakthinK](https://github.com/DrakthinK)

* **Paul Dennis Yauli Misco** - *Trabajo Inicial* - [YaulPauly](https://github.com/YaulPauly)