#if defined(USE_MAP) || defined(USE_UV)
  v_uv = uv;
  v_uv.y = 1.0 - v_uv.y;
#endif
