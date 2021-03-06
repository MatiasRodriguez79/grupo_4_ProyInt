
module.exports = function (sequelize, dataTypes){
    let alias = "Categoria";
    
    let cols = {
        id: {
            type : dataTypes.INTEGER,
            primaryKey : true,
            autoIncrement: true
        },
    
        name : {
            type: dataTypes.STRING
        },
    
        code : {
            type: dataTypes.STRING
        },
        
    }
    
    let config = {
        tableName : "categories",
        timestamps: false}   
    
        let Categoria = sequelize.define(alias, cols, config)


     //   Categoria.associate = function(models) {
        
       //     Producto.hasMany(models.Producto, {
         //       as: 'prod',
           //     foreignKey: 'id_category',
            //});
        //};

        return Categoria;
    }
    