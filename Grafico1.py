import pandas as pd
import matplotlib.pyplot as plt

df = pd.read_csv(r"C:\Users\Jcalderon\Downloads\archive\tourism_dataset_5000.csv")
# Calcular el promedio de calificación por sitio turístico
avg_ratings = df.groupby('Site Name')['Tourist Rating'].mean().sort_values(ascending=False)

# Crear la gráfica de barras
plt.figure(figsize=(12, 6))
avg_ratings.head(10).plot(kind='bar', color='skyblue')
plt.xlabel('Sitio Turístico')
plt.ylabel('Promedio de Calificación')
plt.title('Promedio de Calificación de los Sitios Turísticos')
plt.xticks(rotation=45, ha='right')
plt.grid(axis='y', linestyle='--', alpha=0.7)

#prueba
# Mostrar la gráfica
plt.show()
