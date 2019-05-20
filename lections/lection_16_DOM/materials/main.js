console.log('lection_16');

var contextMenu = [
    {
        title: 'Copy',
        action: 'copy'
    },
    {
        title: 'Paste',
        action: 'paste'
    },
    {
        title: 'Submenu',
        action: 'delete',
        menu: [
            {
                title: 'Sub title 1'
            },
            {
                title: 'Sub title 2'
            }
        ]
    }
]

var actions = {
    copy: function(){console.log('copy')},
    paste: function(){console.log('paste')},
    delete: function(ev){
        // ev.stopPropagation(); // very bad
        console.log('delete')
    }
}


window.onload = function(){
    if (contextMenu && contextMenu.length) {
        initContextMenu(contextMenu);
    }
}







function initContextMenu(list) {
    var div = document.createElement('div');
    div.classList.add('context-menu', 'hidden');

    for(let i = 0, item; i < list.length; i++){
        item = document.createElement('div')
        item.classList.add('menu-item');
        item.innerHTML = list[i].title;

        if(list[i].menu && list[i].menu.length){
            item.addEventListener('click', function(event){
                event.stopPropagation();
                renderInnerMenu(item, list[i].menu);
                actions[list[i].action](event);
            })
        } else {
            item.addEventListener('click', actions[list[i].action]);
        }
        

        div.appendChild(item);
    }

    document.addEventListener('contextmenu', function(event){
        event.preventDefault();
        div.classList.remove('hidden');

        div.style.left = event.clientX + 'px';
        div.style.top = event.clientY + 'px';
    })

    document.addEventListener('click', onContextMenuHidden)

    document.body.appendChild(div);
    
    function onContextMenuHidden(event){
        event.stopPropagation();
        div.classList.add('hidden');
    }

    function renderInnerMenu(target, subList){
        var innerContainer = document.createElement('div');
        innerContainer.classList.add('inner-menu');
        for(var i = 0, item; i < subList.length; i++){
            item = document.createElement('div')
            item.classList.add('menu-item');
            item.innerHTML = subList[i].title;
            item.addEventListener('click', onContextMenuHidden)
            innerContainer.appendChild(item);
        } 
        target.appendChild(innerContainer);
    }
}