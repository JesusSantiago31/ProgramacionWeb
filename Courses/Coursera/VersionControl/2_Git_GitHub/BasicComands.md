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

# Fusión de Ramas (Merging)
```bash
# Combinar cambios de otra rama a la rama actual
git merge <nombre_rama>
```

# Trabajo con Repositorios Remotos
```bash
# Ver repositorios remotos
git remote -v

# Agregar un repositorio remoto
git remote add origin <url_del_repositorio>

# Enviar cambios a un repositorio remoto
git push origin <nombre_rama>

# Descargar cambios desde el repositorio remoto
git pull origin <nombre_rama>
```

# Historial y Revisión de Cambios
```bash
# Ver historial de commits
git log

# Ver historial resumido
git log --oneline

# Ver diferencias entre archivos modificados
git diff

# Ver diferencias de un commit específico
git diff <commit_id>
```
# Revertir Cambios
```bash
# Descartar cambios en un archivo modificado
git checkout -- <archivo>

# Deshacer un commit pero conservar cambios en staging
git reset --soft <commit_id>

# Deshacer un commit y eliminar cambios
git reset --hard <commit_id>
```

# Etiquetas (Tags)
```bash
# Crear una etiqueta ligera
git tag <nombre_tag>

# Crear una etiqueta anotada
git tag -a <nombre_tag> -m "Mensaje de la etiqueta"

# Enviar etiquetas al repositorio remoto
git push origin <nombre_tag>
```

