return (
  <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'flex-start', width: '100%' }}>
  {/* Inserting the TextCarousel at the top of the component */}
  <TextCarousel items={carouselItems} />
  <div style={{ display:  'flex', justifyContent: 'space-around', alignItems: 'center', width: '100%' }}>
    {
      userInfo?.map((item, index) => (
        !isEmpty(item) ?
          (
            <div>
              <Avatar 
              size={100} 
              onClick={() => handleCurUserChange(item)}
              //控制点击之后圆圈颜色状态的渲染
              style={{ backgroundColor: curUser?.uid === item?.uid ? '#f56a00' :'#eee',cursor: "pointer"  }}> 
                {item?.firstName?.substring(0, 1)?.toLocaleUpperCase()}</Avatar>
                <h4 
      style={{ 
        backgroundColor: '#005B8E',
        borderRadius: '5px',
        padding: '5px 10px',
        boxShadow: '0px 2px 5px rgba(0, 0, 0, 0.1)',
        color: '#FFFFFF',
        textAlign: 'center',
        maxWidth: '150px',
        overflow: 'hidden',
        textOverflow: 'ellipsis',
        whiteSpace: 'nowrap'
      }}
    >
      {item?.Relationship 
        ? (JSON.parse(item?.Relationship)?.label) 
        : 'not add'}
      </h4>


    </div>):
          <Avatar size={100}
            style={{ cursor: "pointer" }}
            onClick={()=>handleButtonClick(index)}
            icon={<PlusOutlined />} />
      ))
    }
  </div>
  </div>
);