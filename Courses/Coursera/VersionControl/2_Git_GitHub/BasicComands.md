# Guía de Comandos Git – Control de Versiones

Git es un sistema de control de versiones distribuido que permite gestionar el historial de cambios en proyectos de software.

---

## 🔹 Configuración Inicial

```bash
# Configurar el nombre de usuario
git config --global user.name "Tu Nombre"

# Configurar el correo electrónico
git config --global user.email "tuemail@example.com"

# Ver configuración actual
git config --list


```

# Creación y Clonación de Repositorios
```bash

# Crear un nuevo repositorio
git init

# Clonar un repositorio existente
git clone <url_del_repositorio>
```

# Estado y Seguimiento de Archivos
```bash
# Ver el estado de los archivos (modificados, nuevos, eliminados)
git status

# Agregar archivos al área de preparación (staging)
git add <archivo>      # Agrega un archivo específico
git add .              # Agrega todos los archivos modificados

# Confirmar cambios (commit)
git commit -m "Mensaje descriptivo de los cambios"

# Confirmar cambios saltando el área de preparación
git commit -am "Mensaje de commit"
```

# Ramas (Branches)
```bash
# Crear una nueva rama
git branch <nombre_rama>

# Listar todas las ramas
git branch

# Cambiar de rama
git checkout <nombre_rama>

# Crear y cambiar a la rama en un solo paso
git checkout -b <nombre_rama>

# Eliminar una rama local
git branch -d <nombre_rama>
```