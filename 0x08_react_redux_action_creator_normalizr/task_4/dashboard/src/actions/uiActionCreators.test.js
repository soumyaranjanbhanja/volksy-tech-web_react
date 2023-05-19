it('logout', () => {
    const data = { type: LOGOUT };
    const result = logout();

    expect(result).toEqual(data);
  });

  it('displayNotificationDrawer', () => {
    const data = { type: DISPLAY_NOTIFICATION_DRAWER };
    const result = displayNotificationDrawer();

    expect(result).toEqual(data);
  });

  it('hideNotificationDrawer', () => {
    const data = { type: HIDE_NOTIFICATION_DRAWER };
    const result = hideNotificationDrawer();

    expect(result).toEqual(data);
  });
});
