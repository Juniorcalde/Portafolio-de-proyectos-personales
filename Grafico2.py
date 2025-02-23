import seaborn as sns
import matplotlib as plt
import pandas as pd 
df = pd.read_csv(r"C:\Users\Jcalderon\Downloads\archive\tourism_dataset_5000.csv")

sns.violinplot(data=df, x='Age', y='Satisfaction')
plt.title('Distribución de Satisfacción por Grupo de Edad')
plt.xlabel('Edad')
plt.ylabel('Satisfacción')
plt.show()