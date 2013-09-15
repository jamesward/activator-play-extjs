Ext.application({
    name: 'play-extjs',
    launch: function() {
        Ext.create('Ext.container.Viewport', {
            layout: 'fit',
            items: [
                {
                    title: 'Play Framework + Ext JS',
                    html : 'Hello! Welcome to Play Framework + Ext JS.'
                }
            ]
        });
    }
});